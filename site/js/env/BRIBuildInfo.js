'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-19 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1991';
    this._commitGIT = '1be3c83f4cfb6b8ecb2db4963a7f8d93f1a69065';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}