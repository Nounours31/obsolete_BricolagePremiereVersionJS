'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-01 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2163';
    this._commitGIT = 'dcf26309eb46fa5286e77ed8f1f8c366fca5cd9a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}