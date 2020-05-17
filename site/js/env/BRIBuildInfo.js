'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-17 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1372';
    this._commitGIT = 'e6d51c24bf59eda50240f25bd2fbf8aa9cad8c85';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}