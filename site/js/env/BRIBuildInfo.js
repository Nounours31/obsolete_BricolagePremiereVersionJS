'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-07 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-2190';
    this._commitGIT = 'f968e068f78d4599352ee9781ac63f7f5c878eee';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}