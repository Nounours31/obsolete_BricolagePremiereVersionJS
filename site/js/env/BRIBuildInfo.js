'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-20 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1508';
    this._commitGIT = 'f8aa5f70e8a188cf29ab3bc6654b72a6a7939fd9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}