'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-09 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1583';
    this._commitGIT = 'b9b26162623479df2f2179632380ff0c81cb409e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}