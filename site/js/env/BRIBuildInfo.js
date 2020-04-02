'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-02 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1191';
    this._commitGIT = '8f29127daa469bb465d5ce0a7cd5b82d589d4f23';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}