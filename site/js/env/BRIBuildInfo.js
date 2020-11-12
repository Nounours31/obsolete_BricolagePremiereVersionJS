'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-12 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2090';
    this._commitGIT = '2e5ff0ff56155b0fe8ca08552d0e72e380e18a2c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}