'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-24 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-2011';
    this._commitGIT = 'b9f1db322beb2f46ff24b041ee4b47b7de10581b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}