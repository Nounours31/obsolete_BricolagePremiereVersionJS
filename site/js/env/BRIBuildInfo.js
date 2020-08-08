'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-08 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1703';
    this._commitGIT = 'de4ccc4989cc88c61176ebe1502c51b0b5fd335d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}