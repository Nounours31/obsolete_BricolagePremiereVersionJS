'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-09 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1097';
    this._commitGIT = '20e2fd3085d018ad0f2820afc0c3c95db684d91c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}