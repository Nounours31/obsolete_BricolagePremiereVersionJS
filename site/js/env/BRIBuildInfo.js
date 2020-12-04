'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-04 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2177';
    this._commitGIT = '139ea0fc3266076664b9c2e907760dcb893a76b2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}