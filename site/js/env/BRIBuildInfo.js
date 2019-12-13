'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-13 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-749';
    this._commitGIT = 'ad4918a04a7ea34745639d4a9ad848bb7c7c58fe';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}