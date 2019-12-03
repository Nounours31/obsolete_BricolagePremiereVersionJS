'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-03 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-708';
    this._commitGIT = 'd5eb2f43994a57097385b0098fe190051209abc2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}