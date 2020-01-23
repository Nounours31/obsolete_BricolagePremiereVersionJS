'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-23 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-911';
    this._commitGIT = '473671c849892604e99f218510f5137640dc21fa';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}