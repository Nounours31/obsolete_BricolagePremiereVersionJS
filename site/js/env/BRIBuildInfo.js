'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-24 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1280';
    this._commitGIT = 'bf12ab3ca46dcb4776f882c90fbd382c653bdc91';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}