'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-29 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-2157';
    this._commitGIT = '4bf91da32df48ba952f47cd86f07a29c7389f6d0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}